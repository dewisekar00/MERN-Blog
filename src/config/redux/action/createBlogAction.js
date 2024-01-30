import Axios from 'axios';

export const setForm = (formType, formValue) => {
    return {
        type:
        'SET_FORM_DATA', 
        formType, 
        formValue
    }
}

export const setImgPreview = (payload) => {
    return { type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);

    const fileInput = document.querySelector('.imageUpload');
    const file = fileInput.files[0];
    if (file) {
      data.append('image', file);

      Axios.post('http://localhost:3000/v1/blog/post', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          console.log('post success', res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.error('No file selected');
    }
}

// note: formType, formValue , payload adalah parameter yang dikirim dari depan