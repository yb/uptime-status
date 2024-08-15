import axios from 'axios';

export async function GetHitokoto() {
  const response = await axios.get('https://v1.hitokoto.cn');
  return response;
}
