import { useNavigate } from "react-router-dom";

export default function Lost() {
  const navigate = useNavigate();
  return (
    <div className="lost">
      <h1>LOST</h1>
      <img
        src="https://imgs.search.brave.com/RLg6FU39m8SmehP_-RWwezNU65y3AIUFSiWLmtrgoTk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc2Lzg5Lzk0/LzM2MF9GXzc2ODk5/NDE3X1pPVGdZTG52/STVTRXF5aW1CUkVD/VzZOcmlVVzFlYjIz/LmpwZw"
        alt="Lost"
      ></img>
      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/")}
      >
        Go back...
      </button>
    </div>
  );
}
