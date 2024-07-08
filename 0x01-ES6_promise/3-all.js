import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([{ body }, userResponse]) => {
      const { firstName, lastName } = userResponse;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
