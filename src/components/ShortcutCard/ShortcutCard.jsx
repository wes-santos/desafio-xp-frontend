import React from 'react';
import * as C from './style';

export default function ShortcutCard(cardTitle, isCardPrimary = false, icon = 'icon') {
  return (
    isCardPrimary ? (
      <C.PrimaryCard type="button">
        <C.Container>
          <p>{icon}</p>
          <C.CardTitle>{cardTitle}</C.CardTitle>
        </C.Container>
      </C.PrimaryCard>
    ) : (
      <C.SecondaryCard type="button">
        <C.Container>
          <p>{icon}</p>
          <C.CardTitle>{cardTitle}</C.CardTitle>
        </C.Container>
      </C.SecondaryCard>
    )
  );
}
