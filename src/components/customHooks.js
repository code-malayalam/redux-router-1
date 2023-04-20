import { useState } from "react";

function useInputHook() {
    const [text, setText] = useState('');

    const onChange = (evt) => {
        setText(evt.target.value)
    }

    return [text, onChange];

}

export {
    useInputHook
}
