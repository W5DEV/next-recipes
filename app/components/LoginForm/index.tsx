export default function LoginForm() {
  const handleSubmit = () => {};
  const email = '';
  const password = '';
  const setEmail = (e: string) => {
    console.log(e);
  };
  const setPassword = (e: string) => {
    console.log(e);
  };
  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            className='form-control'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
