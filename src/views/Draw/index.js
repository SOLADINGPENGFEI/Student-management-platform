import React,{useState, useEffect} from 'react'
import { Upload, Icon, Modal } from 'antd'
import axios from 'axios'
import {connect} from 'dva'

function extendDraw(props) {
    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
      const [previewVisible,newpreviewVisible] = useState(false)
      const [previewImage,newpreviewImage] = useState('')
      const [fileList,newfileList] = useState([
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=342e12b86563f624035d3f03b745eb32/203fb80e7bec54e7f0e0839fb7389b504fc26a27.jpg',
        },
      ])

     let handleCancel = () => newpreviewVisible(false)

       let handlePreview = async file => {
            if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
            }
            newpreviewImage(file.url || file.preview)
            newpreviewVisible(true)
            
        };

       let handleChange = ({ fileList }) => newfileList(fileList);
      const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      );

    
    //   canvas 画图
    let handleCanvas = (e) => {
        const canvas = e.target
        
        let ctx = canvas.getContext('2d');
        canvas.width = 512
        canvas.height = 288
        let img = new Image()
        axios({
            method: 'post',
            url: 'http://123.206.55.50:11000/tobase64',
            data: {url: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg'}
        }).then(body=>{
            console.log('body...', body);
            img.src = body.data.data.base64
        }).catch(e=>{
            console.log('e..', e);
        })
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 450, 300, 0,0,512,288)
        }
        //监听图片上传
        const inp = e.target.parentNode.firstChild.querySelector('input')
        
        inp.onchange = function(e) {
            console.log(e.target.files)
            let files = e.target.files
            for (let i=0,len=files.length;i<len;i++){
                var reader = new FileReader()
                reader.onload = function(){
                let avatar = new Image()
                avatar.src = this.result
                avatar.onload = function() {
                    ctx.drawImage(avatar,0,0,300,300)
                    let result = canvas.toDataURL('jpg',0.8)
                    // console.log('result...',result)
                    console.log(result.slice(22))
                    props.userImg = result.slice(22)
                    props.history.replace('/main')
                    }
                }
                reader.readAsDataURL(files[i]);
            }
        }
    }
    
    return <div>
        <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      <div>
        <label>上传文件>>>
        <input type="file" /></label>
        <canvas id="canvas" width="500" height="400" 
        onClick={(e)=>{handleCanvas(e)}}></canvas>
      </div>
    </div>
}
const mapState = state => {
    return state.user
}
export default connect(mapState)(extendDraw)