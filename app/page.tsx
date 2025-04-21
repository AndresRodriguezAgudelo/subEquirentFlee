import { redirect } from 'next/navigation';


export default function Home() {
  redirect('/admin/login');
  return (
    <div>
      <h1>LOGIN</h1>
    </div>
  );
}
