import { atom } from 'recoil';

export const defaultJobCards = atom({
    key: 'defaultJobCards',
    default: [
        {name: "Applied", jobs: [], id: 0}, 
        {name: "Phone Interview", jobs: [], id: 1}, 
        {name: "On Site", jobs: [], id: 2}, 
        {name: "Offer", jobs: [], id: 3}, 
        {name: "Rejected", jobs: [], id: 4}
        ]
})