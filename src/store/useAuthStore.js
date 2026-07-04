import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { dataProfessor } from '../data/dataProfessor';

export const useAuthStore = create(persist((set) => ({
  user: null,
  login: (username, password) => {
    // Admin continua fixo
    if (username === 'admin' && password === 'admin') {
      set({ user: { user: 'admin', role: 'admin' } });
      return true;
    }

    // Lógica para Prof: nome fixo 'prof', mas valida a senha única do cadastro
    if (username === 'prof') {
      const prof = dataProfessor.find(p => p.pass === password);
      if (prof) {
        set({ user: { user: prof.nome, role: 'prof', id: prof.id } });
        return true;
      }
    }
    
    return false;
  },
  logout: () => set({ user: null }),
}), { name: 'auth-storage' }));