# Student-management-platform
后台管理系统
 - 试题管理
 - 用户管理
 - 考试管理
 - 班级管理
 - 阅卷管理

 # 添加了国际化中英文切换 react-intl
 
 # 上传文件 
 - base64图片上传 post http://123.206.55.50:11000/upload_base64
   - var ele = document.querySelector('input');
        ele.onchange = function(e){
            let files = e.target.files;
            var reader = new FileReader();
            reader.onload = function(){
                console.log('result...', this.result);
                axios({
                    method: 'post',
                    url: 'http://123.206.55.50:11000/upload_base64',
                    data: {base64: this.result}
                }).then(body=>{
                    console.log('body...', body);
                }).catch(e=>{
                    console.log('e..', e);
                })
            }
            reader.readAsDataURL(files[0]);
        }
 - 图片转成base64 post http://123.206.55.50:11000/tobase64
   - axios({
    method: 'post',
    url: 'http://123.206.55.50:11000/tobase64',
        data: {url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3360034032,4096528553&fm=26&gp=0.jpg'}
    }).then(body=>{
        console.log('body...', body);
    }).catch(e=>{
        console.log('e..', e);
    })
 # 打包上线
    - npm run build
    - 通过Xftp进行上线服务器
