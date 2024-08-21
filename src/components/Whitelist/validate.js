import DisplayMessage from "../common/DisplayMessage/DisplayMessage";
import whitelist from "../../actions/postRequests/whitelist";

export default async function validate(event, args) {
  const { setPlayerNameError, SetPasswordError, setMessage, setLoading } = args;
  event.preventDefault();
  setLoading(true);
  const playerName = event.target.playerName.value.trim();
  const password = event.target.password.value.trim();

  if (playerName.length <= 0) {
    setPlayerNameError(true);
  } else {
    setPlayerNameError(false);
  }

  if (password <= 0) {
    SetPasswordError(true);
  } else {
    SetPasswordError(false);
  }

  if (playerName.length <= 0 || password <= 0) {
    setMessage(<DisplayMessage messageType="warning">All fields must be filled</DisplayMessage>);
    setLoading(false);
    return;
  }

  try {
    const response = await whitelist(playerName, password);

    if (response.status === 500) {
      return setMessage(<DisplayMessage messageType="error">{response.message}</DisplayMessage>);
    }

    if (response.success) {
      setMessage(<DisplayMessage messageType="success">{response.message}</DisplayMessage>);
      event.target.reset();
    } else {
      setMessage(<DisplayMessage messageType="warning">{response.message}</DisplayMessage>);
    }
  } catch (error) {
    console.log(error);
    setMessage(<DisplayMessage messageType="error">Server offline</DisplayMessage>);
  } finally {
    setLoading(false);
  }
}
