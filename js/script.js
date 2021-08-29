fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>res.json())
.then(data=>displayComments(data))



const displayComments=comments=>{
    const container=document.getElementById('container');
    comments.forEach((comment) => {
       const div=document.createElement('div');
       div.innerHTML=`
        <h1>${comment.name}</h1>
        <button onclick=setCommentId('${comment.id}')>show ID</button>
       `
       container.appendChild(div)
    })

}

const setCommentId=id=>{
    const diplayIdField=document.getElementById('diplay-id');
    diplayIdField.innerHTML=`comment id is: ${id}`;

}