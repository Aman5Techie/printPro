
const SignupBtn = () => {
  return (
    <>
      <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
        <a
          href="/login"
          className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
        >
          Sign in
        </a>

        <a
          href="/signup"
          className="rounded-lg bg-[#1C3FB7] px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
        >
          Sign Up
        </a>
      </div>
    </>
  );
};


export default SignupBtn;
