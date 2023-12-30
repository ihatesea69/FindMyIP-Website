const url = "https://api.ipify.org/?format=json";
const FindMyIp = async () => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data.ip
    }
    catch {
        (error:any) => console.log(error);
    }
}
export default FindMyIp;
