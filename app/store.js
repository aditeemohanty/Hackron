import { create } from 'zustand';

const useStore = create((set) => ({
  competitorPrice: 0, // Default value
  ourPrice: 10, // Default value
  suggestedPrice: 0, // Default value
  productWeight: 0, // Default value
  stockLeft: 0, // Default value
  comparison: {
    sign: '>', // Default value
    color: 'bg-green-600', // Default value
  },

  // Actions to update the state
  setCompetitorPrice: (cPrice) => set({ competitorPrice: cPrice }),
  setOurPrice: (oPrice) => set({ ourPrice: oPrice }),
  setSuggestedPrice: (sPrice) => set({ suggestedPrice: sPrice }),
  setProductWeight: (prodWeight) => set({ productWeight: prodWeight }),
  setStockLeft: (stock) => set({ stockLeft: stock }),
  setComparison: (sign, color) => set({ comparison: { sign, color } }),
}));

export default useStore;