import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMetamaskInstalled =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  // 🔹 Connect Wallet
  const connect = async () => {
    if (!isMetamaskInstalled) {
      setError("MetaMask not installed");
      return;
    }

    try {
      setIsConnecting(true);
      setError(null);

      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = accounts[0];
      setAddress(account);
      setIsConnected(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      setChainId(network.chainId.toString());

      const balanceWei = await provider.getBalance(account);
      setBalance(ethers.formatEther(balanceWei));
    } catch (err: any) {
      setError(err.message || "Failed to connect");
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  };

  // 🔹 Disconnect Wallet
  const disconnect = () => {
    setAddress(null);
    setBalance(null);
    setChainId(null);
    setIsConnected(false);
  };

  // 🔹 Listen for account & network changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        setAddress(accounts[0]);
        setIsConnected(true);
      }
    };

    const handleChainChanged = (chainId: string) => {
      setChainId(chainId);
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  return {
    address,
    balance,
    chainId,
    isConnected,
    isConnecting,
    error,
    connect,
    disconnect,
    isMetamaskInstalled,
  };
};
