const convertdata=(data,type)=>{
    const converteddata=data[type].map((item)=>{
        return {
            date:item[0],
            [type]:item[1]
        };
    });
    return converteddata;

}

export {convertdata}