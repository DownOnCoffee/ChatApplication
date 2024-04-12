import { create } from "zustand";

//zustand is a state management library , easy to use, for conversation and messages in this app

const useConversation = create((set) => ({
	selectedConversation: null,
	setselectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;