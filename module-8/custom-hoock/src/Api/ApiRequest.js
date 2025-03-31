import axios  from "axios"


const BaseUrl = "https://inertia-pos.manirul.xyz/api" ;



export async function cardList() {
    let loading = true;

    try {
        const response = await axios.get(BaseUrl + "/card-list");
        console.log(response.status); // শুধুমাত্র ডিবাগিং উদ্দেশ্যে

        if (response.status !== 200) throw new Error("Failed to fetch Data"); // সঠিকভাবে স্ট্যাটাস চেক করা হলো

        const result = response.data.data; // axios রেসপন্সে data এর মধ্যে থাকে ডাটা
        return { data: result, error: null, loading: false }; // ডাটা রিটার্ন করা হলো
    } catch (err) {
        return { data: [], error: err.message, loading: false }; // এরর হ্যান্ডলিং
    } finally {
        loading = false; // নিশ্চিত করা হলো যে লোডিং false হবে
        console.log("cardList API call finished.");
    }
}



export async function weeklyActivityList() {
    let res = await axios.get(BaseUrl+"/weekly-activity-list");
    if(res.status === 200){
        return res.data ;
    }else{
        return [] ;
    }
}