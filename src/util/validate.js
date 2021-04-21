//判断是否为空
export const isDataValid = (data) =>{
  if(data !=null && data !==""&&data!=="undefined"&&data!==null&&data!=undefined){
    return true;
  }
  return false
}
export const config ={
  dataserver: "http://118.195.166.189:8081/",
  imgserver: "http://118.195.166.189:8080/"
}
