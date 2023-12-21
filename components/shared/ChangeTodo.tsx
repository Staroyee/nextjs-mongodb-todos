import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeTodoStatus } from "@/app/actions/todoActions";
import { todoType } from "@/app/types/todoType";

const ChangeTodo = ({ todo }: todoType) => {
  return (
    <>
      <Form action={changeTodoStatus}>
        <Input name="inputId" value={todo.id} type="hidden" />
        <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
      </Form>
    </>
  );
};

export default ChangeTodo;
