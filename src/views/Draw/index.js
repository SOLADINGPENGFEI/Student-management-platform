import React,{useState, useEffect} from 'react'
import { Upload, Icon, Modal } from 'antd'
import axios from 'axios'

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
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
        let canvas = document.getElementById('canvas');
        console.log(canvas)
        // let ctx = canvas.getContext('2d');
        // ctx.fillStyle = 'green';
        // ctx.fillRect(10, 10, 100, 100);

    //base64
    let ele = document.querySelector('input');
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
      <label>上传文件>>><input type="file"/></label>
      <canvas id="canvas" width="150" height="150"></canvas>
    </div>
}
export default extendDraw