async function ImagetoBase64(blob){
    const reader = new FileReader()
    reader.readAsDataURL(blob)

    const data = new Promise((resolve,reject)=>{
        reader.onload = ()=> resolve(reader.result)
        reader.onerror = err => reject(err)
    })

    return data
}

export { ImagetoBase64 }
