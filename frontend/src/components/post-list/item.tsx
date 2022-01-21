import React from 'react';
import { css } from '@emotion/react';
import { ItemType } from '../../type';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Item(props: { item: ItemType }) {
  return (
    <div css={listBox}>
      <div css={listBox__title}>
        <div>{props.item.title}</div>
        <div>{props.item.time}</div>
      </div>
      <div css={listBox__content__underline}></div>
      <div css={listBox__location}>
        <img
          src="https://user-images.githubusercontent.com/84161508/150567628-98def1bb-0b38-46f1-a272-e1852446412b.png"
          alt="point"
          css={listBox__Location__icon}
        />

        <div>{props.item.start}</div>
        <span>→</span>
        <div>{props.item.destination}</div>
      </div>
      <div css={listBox__footer}>
        <div>{props.item.content}</div>
        <ListButton>
          {props.item.participant}/{props.item.totalPeople}
        </ListButton>
      </div>
    </div>
  );
}

const listBox = css`
  width: 92%;
  margin: 1.5vh auto;
  border-radius: 4vw;
  background-color: white;
  box-shadow: rgba(97, 83, 211, 0.5) 3px 3px 8px;
`;

const listBox__title = css`
  margin: 0 auto;
  width: 92%;
  display: flex;
  justify-content: space-between;
  font-size: 2vmax;
  color: rgb(140, 140, 140);
  padding: 1vmax 0;
`;

const listBox__content__underline = css`
  margin: 0 auto;
  width: 92%;
  border-bottom: 2px solid rgba(97, 83, 211, 0.3);
`;
// 'icon start start destination destination'
// 'icon stLocation stLocation desLocation desLocation'

const listBox__location = css`
  margin: 0 auto;
  width: 92%;
  display: flex;
  align-items: flex-end;
  font-size: 2.5vmax;
  color: rgb(97, 83, 211);
  font-weight: 550;
  padding: 2vmin 0 0 0;
`;

const listBox__Location__icon = css`
  width: 2vmax;
  padding-right: 3vw;
`;

const listBox__footer = css`
  grid-area: footer;
  font-size: 1.5vmax;
  margin: 0 auto;
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(140, 140, 140);
  padding: 1vmax 0;
`;

const ListButton = styled(Button)({
  background: 'linear-gradient(45deg, rgb(97,83,211)30%, rgb(174,128,245)90%)',
  border: 0,
  borderRadius: 30,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: '4vmax',

  padding: '0 1vmax',
  fontSize: '2vmax',
});
