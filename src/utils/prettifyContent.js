function prettifyContent(apiResponse) {
  // Remove leading and trailing whitespaces
  let prettifiedText = apiResponse.trim();
  prettifiedText = prettifiedText.replace(/\n/g, "<br>");

  return { __html: prettifiedText };
}
export default prettifyContent;
