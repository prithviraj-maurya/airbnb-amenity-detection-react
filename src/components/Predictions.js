import React from 'react';
import axios from 'axios';

class Predictions extends React.Component {

  state = {
    title: '',
    content: '',
    file: null,
    predictions: []
  };


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      file: e.target.files[0],
      imageSrc: URL.createObjectURL(e.target.files[0])
    });
      console.log(this.state); // Would see a path?
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('file', this.state.file, this.state.file.name);
    form_data.append('title', this.state.title);
    form_data.append('content', this.state.content);
    let url = 'http://127.0.0.1:5000/predict';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          // res.data = res.data.replace(/'/g, "");
          let predictions = [];
          let labels = [];
          res.data.map(data => {
            if(!labels.includes(data['label'])) {
              predictions.push(data);
              labels.push(data['label']);
            }
          });
          this.setState({predictions: predictions});
        })
        .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
                <p>
                  <input type="file"
                         id="image"
                         accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
                </p>
                <input type="submit"/>
              </form>
            </div>
            <div className="col-md-6">
              { this.state.predictions.length >0 &&
              <table>
                <thead>
                  <tr>
                    <td>Class</td>
                    <td>Probablity</td>
                  </tr>
                </thead>
                <tbody>
                    {this.state.predictions.map((data, index) => (
                      <tr>
                        <td key={data['label']}>
                          {data.label}
                        </td>
                        <td key={index}>
                          {(data.score / 100).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table> }
            </div>
            <br />
          </div>
          { this.state.imageSrc && <img className="preview" src={this.state.imageSrc} alt="uploaded" />}
        </div>
    )
  }
}

export default Predictions;
