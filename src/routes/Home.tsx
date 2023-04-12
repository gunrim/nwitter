import { dbService } from 'fbase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';

const Home = () => {

    const [nweet, setNweet] = useState("");

    const onSubmit =  async(event:any) => {
        event.preventDefault();

        console.log("===onSubmit===");
        console.log(nweet);

        const docRef = await addDoc(collection(dbService, "nweets"), {
            name: "Tokyo",
            country: "Japan",
            createDate : Date.now()
        });
        console.log("Document written with ID: ", docRef.id);
        setNweet("");
    }

    const onChange = (event:any) => {
        const {"target":{value}} = event;
        setNweet(value);

        console.log(nweet);
    }



    return (
        <div>
            <form>
                <input type="text" placeholder='데이터 고고' onChange={onChange} value={nweet} />
                <input type="submit" value="저장" onSubmit={onSubmit}/>
            </form>
        </div>
    )
}

export default Home;
