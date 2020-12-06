
    const get = async (url) => {
        try {
            const request = await fetch(url);
            const result = await request.json();
            return result;
        } catch (err) {
            console.log("http ger method err", err);
            throw Error(err);
        }
    }

    export const post = async (url, body) => {
        try {
            const request = await fetch(url, {
                method: "POST",
                body
            })

            const result = await request.json();
            return result;

        } catch (err) {
            console.log("http Post method err", err);
            throw Error(err);
        }
    }

export default get;