import React from "react";
import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const WritePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();  

  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [ error, setError] = useState(false);

  const submitComment = () => {
    if (id) {
      axios
        .put(`http://127.0.0.1:8000/entries/${id}/`, { author, comment })
        .then(() => {
          alert("게시글이 수정되었어요.");
          navigate(`/`);
        })
        .catch((err) => {
          console.log(err);
          alert("게시글 수정 실패");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      axios
        .post("http://127.0.0.1:8000/entries/", { author, comment })
        .then(() => {
          alert("게시글 작성이 완료되었어요.");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert("게시글 작성 실패");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/entries/${id}/`)
        .then((res) => {
          setAuthor(res.data.author);
          setComment(res.data.comment);
        })
        .catch((err) => 
          console.log(err))
        .finally(() => setTimeout(() => setLoading(false), 2000));
    } else {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [id]);

  if (loading) {
    return <Message>{id ? "게시글 수정 페이지 로딩중" : "게시글 작성 페이지 로딩중"}</Message>;
  }

  return (
    <WritePageWrapper>
        <CommentForm author={author} comment={comment} setAuthor={setAuthor} setComment={setComment} />
      <ButtonWrapper>
        <Button text={id ? "수정하기" : "작성하기"} onBtnClick={submitComment} />
        <Button text="취소" onBtnClick={() => navigate(-1)} />
      </ButtonWrapper>
    </WritePageWrapper>
  );
};

export default WritePage;

const WritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.2rem 3.88rem;
  background-color: var(--bg-light);
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const Message = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  color: rgb(102, 102, 102);
`;