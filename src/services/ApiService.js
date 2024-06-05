import axios from 'axios';

class ApiService {
  constructor(id, url, data, type) {
    this.id = id;
    this.data = data;
    this.type = type;
    this.url = `http://localhost:5000/api/${url}`;
  };

  async get() {
    return await axios.get(this.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.type === 'protected' ? `Bearer ${this.GeneralHereditaryService.getItem(String(this.id))}` : ''
      }
    }).then(({data}) => data).catch(({response}) => response);
  };
    
  async post() {
    console.log('work')
    return await axios.post(this.url, JSON.stringify(this.data), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.type === 'protected' ? `Bearer ${this.GeneralHereditaryService.getItem(String(this.id))}` : ''
      }
    }).then(({data}) => data).catch(({response}) => response);
  };
    
  async put() {
    return await axios.put(this.url, JSON.stringify(this.data), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.type === 'protected' ? `Bearer ${this.GeneralHereditaryService.getItem(String(this.id))}` : ''
      }
    }).then(({data}) => data).catch(({response}) => response);
  };
    
  async delete() {
    return await axios.delete(this.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.type === 'protected' ? `Bearer ${this.GeneralHereditaryService.getItem(String(this.id))}` : ''
      }
    }).then(({data}) => data).catch(({response}) => response);
  };
};

export default ApiService;