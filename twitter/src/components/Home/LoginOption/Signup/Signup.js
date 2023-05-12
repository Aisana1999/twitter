function Signup() {
  const [user, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [cpwd, setCpassword] = useState("");
}

const changeOnName = (event) => {
  setUserName(event.target.value);
};
const changeOnEmail = (event) => {
  setEmail(event.target.value);
};
const changeOnPwd = (event) => {
  setPassword(event.target.value);
};
const changeOnCpwd = (event) => {
  setCpassword(event.target.value);
};

function submit() {
  console.log(user);
  console.log(email);
  console.log(pwd);
  console.log(cpwd);
}
