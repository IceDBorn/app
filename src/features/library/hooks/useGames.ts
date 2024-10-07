import { useGamesStore } from "@/stores/games";
import { useEffect } from "react";

export const useGames = () => {
  const {
    games,
    loading,
    error,
    addGame,
    getGameById,
    updateGame,
    deleteGame,
    fetchGames,
  } = useGamesStore();

  // useEffect(() => {
  //   if (!hasInitialized) initializeDatabase();
  // }, [hasInitialized, initializeDatabase]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return {
    fetchGames,
    games,
    loading,
    error,
    addGame,
    getGameById,
    updateGame,
    deleteGame,
  };
};