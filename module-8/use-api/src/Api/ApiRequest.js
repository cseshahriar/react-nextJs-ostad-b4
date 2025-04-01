import axios from 'axios'

const BASE_URL = 'http://inertia-pos.manirul.xyz/api'

export default async function cardList() {
    try {
        const res = await axios.get(`${BASE_URL}/card-list`);
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.error("Error fetching card list:", error);
    }
    return [];
}

export async function weeklyActivities() {
    let res = await axios.get(BASE_URL + '/weekly-activity-list')
    if(res.status === 2000) {
        return res.data
    } else {
        return [];
    }
}