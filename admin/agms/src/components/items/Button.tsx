const Button = ({name}:{name:string}) => {
  return (
    <button className=" bg-primary-default px-4 py-3 rounded-md capitalize text-white">{name}</button>
  )
}

export default Button