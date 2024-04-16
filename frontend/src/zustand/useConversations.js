import { create } from "zustand";

//zustand is a state management library , easy to use, for conversation and messages in this app

const useConversation = create((set) => ({
	selectedConversation: null,
	setselectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })), 
	
}));

export default useConversation;