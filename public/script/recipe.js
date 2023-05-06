// Constally listen to resize and change number of columns of text area.

const updateTextAreaColumns = () => {
  const postCommentDivWidth =
    document.getElementsByClassName("post-comment")[0].offsetWidth;
  const commentTextArea = document.getElementsByClassName("comment-text")[0];
  const columnWidth = 8;
  const numberOfColumns = Math.floor(postCommentDivWidth / columnWidth);
  commentTextArea.setAttribute("cols", numberOfColumns);
};

window.addEventListener("resize", updateTextAreaColumns);

updateTextAreaColumns();
