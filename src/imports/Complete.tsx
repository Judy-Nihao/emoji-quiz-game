function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-[180px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[180px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[40px] left-[90px] not-italic text-[20px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">
          COMPLETE!
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path d="M6 7H2V13H6V7Z" fill="var(--fill-0, black)" id="Vector" />
          <path
            d="M6 7V13L11 16V4L6 7Z"
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d="M15 6H13V8H15V6Z"
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d="M15 12H13V14H15V12Z"
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d="M17 4H15V6H17V4Z"
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
          <path
            d="M17 14H15V16H17V14Z"
            fill="var(--fill-0, black)"
            id="Vector_6"
          />
          <path
            d="M19 8H17V12H19V8Z"
            fill="var(--fill-0, black)"
            id="Vector_7"
          />
        </g>
      </svg>
    </div>
  );
}

function SoundToggle() {
  return (
    <div
      className="bg-white relative shrink-0 size-[48px]"
      data-name="SoundToggle"
    >
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[3px] relative size-[48px]">
        <Icon />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-black h-[64px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[93px] h-[64px] items-center justify-center pl-[141px] pr-0 py-0 relative w-full">
          <Heading />
          <SoundToggle />
        </div>
      </div>
    </div>
  );
}

function GameOver() {
  return (
    <div
      className="content-stretch flex h-[75.471px] items-start relative shrink-0 w-full"
      data-name="GameOver"
    >
      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[72px] text-center text-neutral-950 text-nowrap whitespace-pre">
        🎮
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[79.664px] items-start left-[8.2px] px-[197.064px] py-0 top-[17.17px] w-[469.6px]"
      data-name="Container"
    >
      <GameOver />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[30px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-neutral-950 text-nowrap top-[-4px] whitespace-pre">
          🚗
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[196px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[196px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] whitespace-pre">
          TRANSPORTATION
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[19px] top-[111px] w-[448px]"
      data-name="Container"
    >
      <Text />
      <Paragraph />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="absolute content-stretch flex h-[14px] items-start left-[100.75px] top-[5.5px] w-[188.5px]"
      data-name="Text"
    >
      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[0.5px] whitespace-pre">
        Keep training
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="absolute content-stretch flex h-[14px] items-start left-[115.25px] top-[30.7px] w-[159.5px]"
      data-name="Text"
    >
      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[0.5px] whitespace-pre">
        to improve!
      </p>
    </div>
  );
}

function DialogueText() {
  return (
    <div
      className="absolute h-[50.391px] left-[29px] top-[29px] w-[390px]"
      data-name="DialogueText"
    >
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute bg-white left-[-5px] shadow-[0px_0px_0px_3px_#000000] size-[20px] top-[-5px]"
      data-name="Container"
    />
  );
}

function Container4() {
  return (
    <div
      className="absolute bg-white left-[433px] shadow-[0px_0px_0px_3px_#000000] size-[20px] top-[-5px]"
      data-name="Container"
    />
  );
}

function Container5() {
  return (
    <div
      className="absolute bg-white left-[-5px] shadow-[0px_0px_0px_3px_#000000] size-[20px] top-[93.39px]"
      data-name="Container"
    />
  );
}

function Container6() {
  return (
    <div
      className="absolute bg-white left-[433px] shadow-[0px_0px_0px_3px_#000000] size-[20px] top-[93.39px]"
      data-name="Container"
    />
  );
}

function PokemonFrame() {
  return (
    <div
      className="absolute bg-white h-[108.391px] left-[19px] top-[163px] w-[448px]"
      data-name="PokemonFrame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-black border-solid inset-0 pointer-events-none"
      />
      <DialogueText />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_4px_inset_#ffffff,0px_0px_0px_7px_inset_#000000]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[15px] left-[210px] not-italic text-[#8b9594] text-[10px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">
        FINAL SCORE
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[24px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-0 whitespace-pre">
          OK
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="bg-green-500 h-[36px] relative shrink-0 w-[64px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-black border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[64px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[12px] text-center text-nowrap text-white top-[6px] translate-x-[-50%] whitespace-pre">
          3
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Text3 />
      <Container7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[24px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-0 whitespace-pre">
          NG
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="bg-red-500 h-[36px] relative shrink-0 w-[64px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-black border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[64px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[12px] text-center text-nowrap text-white top-[6px] translate-x-[-50%] whitespace-pre">
          7
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Text4 />
      <Container9 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-0 whitespace-pre">
          RATE
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="bg-black h-[36px] relative shrink-0 w-[64px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-black border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[64px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[12px] text-center text-white top-[6px] translate-x-[-50%] w-[36px]">
          30%
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Text5 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[124px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[18.063px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[18.063px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-neutral-950 text-nowrap top-0 whitespace-pre">
          ★
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="h-[36px] opacity-20 relative shrink-0 w-[18.063px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[18.063px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-neutral-950 text-nowrap top-0 whitespace-pre">
          ★
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[36px] items-start justify-center relative shrink-0 w-full"
      data-name="Container"
    >
      {[...Array(2).keys()].map((_, i) => (
        <Container14 key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <Container15 key={i} />
      ))}
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex flex-col gap-[12px] h-[231px] items-start left-[19px] pb-[2px] pt-[14px] px-[14px] top-[287.39px] w-[448px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-black border-solid inset-0 pointer-events-none"
      />
      <Paragraph1 />
      <Container13 />
      <Container16 />
      <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_0px_0px_inset_#8b9594]" />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-black h-[70px] left-[19px] top-[534.39px] w-[448px]"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]"
      />
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[28px] left-[154px] not-italic text-[14px] text-nowrap text-white top-[21px] whitespace-pre">
        PLAY AGAIN
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="bg-white h-[623.391px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none"
      />
      <Container1 />
      <Container2 />
      <PokemonFrame />
      <Container17 />
      <Button />
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="bg-[#d4dedd] h-[705.391px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[705.391px] items-start pb-[3px] pt-[7px] px-[7px] relative w-full">
          <Container />
          <Container18 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-2px_-2px_0px_0px_inset_#8b9594,2px_2px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="bg-[#b4bfbe] h-[717.391px] relative shrink-0 w-[512px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[717.391px] items-start pb-0 pt-[6px] px-[6px] relative w-[512px]">
        <Container19 />
      </div>
    </div>
  );
}

export default function Complete() {
  return (
    <div
      className="bg-[#b4bfbe] content-stretch flex items-center justify-center relative size-full"
      data-name="Complete"
    >
      <Container20 />
    </div>
  );
}
