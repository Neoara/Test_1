const newPostTitleInput = $("#post_title");
const newPostContentInput = $("#post_content");
const createBtn = $("#create_btn");

createBtn.click(() => {
    let settings = {
        url: "http://localhost:8080/posts",
        method: 'post',
        data: {
            title: newPostTitleInput.val(),
            content: newPostContentInput.val(),
            author: localStorage.getItem('user')
        },
        success: (res) => {
            alert(res)
        },
        error: () => {
            alert('error')
        }
    };

    $.ajax(settings);
});

const drawPosts = async () => {
    let settings = {
        url: "http://localhost:8080/posts",
        method: 'get'
    };

    const postBlock = $("#post_block");
    let posts = await $.ajax(settings);

    postBlock.empty();
    for(let item of posts){
        postBlock.append(`
            <div>
                Title: ${item.title} <br>
                ${item.content}
                Author: ${item.author.fullName}
            </div>
        `);
    };
};
drawPosts();