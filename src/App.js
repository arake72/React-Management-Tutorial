import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '951111',
  'gender': '남자',
  'job': '중학생'},
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나관주',
    'birthday': '921131',
    'gender': '남자',
    'job': '상인'},
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '동메달',
      'birthday': '951012',
      'gender': '남자',
      'job': '디자이너'},
]

function App() {
  return (
      <div>
        {customers.map(c => {
          return (
            <Customer 
            key = {c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          )
        })}
      </div>
  );
}

export default App;
