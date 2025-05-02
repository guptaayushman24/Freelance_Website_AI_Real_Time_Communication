import { create } from 'zustand'
interface AppState {
    userid: number,
    setuserid: (id: number) => void
    client_name: string,
    setclient_name: (client_name: string) => void,
    name: string,
    setname: (name: string) => void,
    client_email: string,
    setclient_email: (client_email: string) => void,
    projecttitle: string,
    setprojecttitle: (projecttitle: string) => void,
    budget: string,
    setbudget: (budget: string) => void,
    timeline: string,
    settimeline: (timeline: string) => void
    clientemail: string,
    setclientemail: (clientemail: string) => void,
    useremail: string,
    setuseremail: (useremail: string) => void
    whichuser: string,
    setwhichuser: (whichuser: string) => void
    role: string,
    setrole: (role: string) => void
    email: string,
    setemail: (email: string) => void
    projectidtodelete: number,
    setprojectidtodelete: (projectidtodelete: number) => void
}


export const useStore = create<AppState>((set) => ({
    userid: 0,
    setuserid: (userid => set({ userid: userid })),
    client_name: '',
    setclient_name: (client_name => set({ client_name: client_name })),
    name: '',
    setname: (name => set({ name: name })),
    client_email: '',
    setclient_email: (client_email => set({ client_email: client_email })),
    projecttitle: '',
    setprojecttitle: (projecttitle => set({ projecttitle: projecttitle })),
    budget: '',
    setbudget: (budget => set({ budget: budget })),
    timeline: '',
    settimeline: (timeline => set({ timeline: timeline })),
    clientemail: '',
    setclientemail: (clientemail => set({ clientemail: clientemail })),
    useremail: '',
    setuseremail: (useremail => set({ useremail: useremail })),
    whichuser: '',
    setwhichuser: (whichuser => set({ whichuser: whichuser })),
    role: '',
    setrole: (role => set({ role: role })),
    email: '',
    setemail: (email => set({ email: email })),
    projectidtodelete: -1,
    setprojectidtodelete: (projectidtodelete => set({ projectidtodelete: projectidtodelete }))

}))