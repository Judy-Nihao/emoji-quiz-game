import svgPaths from "./svg-sgm3mga0qk";

function Text() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[140px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[140px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[17.5px] left-0 not-italic text-[#8b9594] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">TOPIC</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[140px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[140px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[30px] left-0 not-italic text-[20px] text-black text-nowrap top-0 whitespace-pre">ANIMALS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[47.5px] items-start left-[72px] top-[6.25px] w-[140px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 size-[60px] top-[-4px]" data-name="Text">
      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-neutral-950 text-nowrap whitespace-pre">🐶</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[60px] left-[144px] top-0 w-[212px]" data-name="Container">
      <Container />
      <Text2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] left-[69.78px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-0 translate-x-[-50%] whitespace-pre">✓</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Press_Start_2P:Regular',sans-serif] grow leading-[8px] min-h-px min-w-px not-italic relative shrink-0 text-[#8b9594] text-[8px] text-center">OK</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[20px] left-[70px] not-italic text-[14px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function Scoreboard() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Scoreboard">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] h-[64px] items-start pb-[2px] pt-[6px] px-[10px] relative w-full">
          <Container2 />
          <Container3 />
          <Container4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-[#b4bfbe] grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[68px] items-start pb-0 pt-[2px] px-[2px] relative w-full">
          <Scoreboard />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] left-[69.78px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-0 translate-x-[-50%] whitespace-pre">✗</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Press_Start_2P:Regular',sans-serif] grow leading-[8px] min-h-px min-w-px not-italic relative shrink-0 text-[#8b9594] text-[8px] text-center">NG</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[20px] left-[70px] not-italic text-[14px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function Scoreboard1() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Scoreboard">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] h-[64px] items-start pb-[2px] pt-[6px] px-[10px] relative w-full">
          <Container6 />
          <Container7 />
          <Container8 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 bg-[#b4bfbe] grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[68px] items-start pb-0 pt-[2px] px-[2px] relative w-full">
          <Scoreboard1 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[20px] left-[70px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-0 translate-x-[-50%] whitespace-pre">#</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Press_Start_2P:Regular',sans-serif] grow leading-[8px] min-h-px min-w-px not-italic relative shrink-0 text-[#8b9594] text-[8px] text-center">NO.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[20px] left-[70px] not-italic text-[14px] text-black text-center top-0 translate-x-[-50%] w-[56px]">3/10</p>
    </div>
  );
}

function Scoreboard2() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Scoreboard">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] h-[64px] items-start pb-[2px] pt-[6px] px-[10px] relative w-full">
          <Container10 />
          <Container11 />
          <Container12 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 bg-[#b4bfbe] grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[68px] items-start pb-0 pt-[2px] px-[2px] relative w-full">
          <Scoreboard2 />
        </div>
      </div>
    </div>
  );
}

function Scoreboard3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[68px] items-start left-0 top-[76px] w-[500px]" data-name="Scoreboard">
      <Container5 />
      <Container9 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20px]">
        <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-0 whitespace-pre">⏰</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[8px] not-italic relative shrink-0 text-[#8b9594] text-[8px] text-nowrap whitespace-pre">TIME</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-0 whitespace-pre">6</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[38px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] h-[38px] items-start relative w-[32px]">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#4caf50] h-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#306230]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#d4dedd] h-[10px] relative shrink-0 w-[200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[10px] items-start pb-[2px] pl-[3px] pr-[80.602px] pt-[3px] relative w-[200px]">
        <Container18 />
      </div>
    </div>
  );
}

function Timer() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full" data-name="Timer">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center justify-between px-[14px] py-[2px] relative w-full">
          <Container14 />
          <Container17 />
          <Container19 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#b4bfbe] box-border content-stretch flex flex-col h-[70px] items-start left-[2px] pb-[5px] pt-[8px] px-[8px] top-[160px] w-[496px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[5px] border-black border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_#000000]" />
      <Timer />
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-black h-[47.25px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[19.25px] left-[237px] not-italic text-[14px] text-center text-nowrap text-white top-[13.5px] translate-x-[-50%] whitespace-pre">WHO AM I?</p>
    </div>
  );
}

function EmojiQuiz() {
  return (
    <div className="absolute content-stretch flex items-start left-[170px] size-[96px] top-0" data-name="EmojiQuiz">
      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[96px] not-italic relative shrink-0 text-[96px] text-neutral-950 text-nowrap whitespace-pre">🐻</p>
    </div>
  );
}

function EmojiQuiz1() {
  return (
    <div className="absolute h-[36px] left-[-4px] top-[-4px] w-[30px]" data-name="EmojiQuiz">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-black text-nowrap top-0 whitespace-pre">?</p>
    </div>
  );
}

function EmojiQuiz2() {
  return (
    <div className="absolute h-[36px] left-[410px] top-[-4px] w-[30px]" data-name="EmojiQuiz">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-black text-nowrap top-0 whitespace-pre">?</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <EmojiQuiz />
      <EmojiQuiz1 />
      <EmojiQuiz2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[134px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[134px] items-start pb-[3px] pt-[16.398px] px-[19px] relative w-full">
          <Container21 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[16.5px] left-[227px] not-italic text-[12px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">A wild EMOJI appeared!</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-black h-[36.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[36.5px] items-start pb-[2px] pt-[10px] px-[10px] relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#d4dedd] h-[239.75px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[239.75px] items-start pb-[3px] pt-[7px] px-[7px] relative w-full">
          <Heading />
          <Container22 />
          <Container23 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-2px_-2px_0px_0px_inset_#8b9594,2px_2px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#b4bfbe] h-[251.75px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[251.75px] items-start pb-0 pt-[6px] px-[6px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[16.96px] opacity-0 top-[12px] w-[12px]" data-name="Text">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-0 whitespace-pre">▶</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[58px] left-[248px] top-[17px] w-[221px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]" />
      <Text3 />
      <div className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[20px] left-[calc(50%-78px)] not-italic text-[10px] text-black text-nowrap top-[calc(50%-20.375px)] whitespace-pre">
        <p className="mb-0">{`HEAR-NO-EVIL `}</p>
        <p>MONKEY</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function EmojiQuiz3() {
  return (
    <div className="absolute h-[24px] left-[35px] top-[12px] w-[84px]" data-name="EmojiQuiz">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-[-2px] not-italic text-[10px] text-black text-nowrap top-[3.25px] whitespace-pre">HAMSTER</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[16.96px] opacity-0 top-[15.25px] w-[12px]" data-name="Text">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-0 whitespace-pre">▶</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[58px] left-[19px] top-[83.25px] w-[221px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]" />
      <EmojiQuiz3 />
      <Text4 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function EmojiQuiz4() {
  return (
    <div className="absolute h-[24px] left-[35px] top-[17.25px] w-[48px]" data-name="EmojiQuiz">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[10px] text-black text-nowrap top-0 whitespace-pre">BEAR</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[16.96px] opacity-0 top-[12px] w-[12px]" data-name="Text">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-[5.25px] whitespace-pre">▶</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[58px] left-[19px] top-[17.25px] w-[221px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]" />
      <EmojiQuiz4 />
      <Text5 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function EmojiQuiz5() {
  return (
    <div className="absolute h-[24px] left-[35px] top-[12px] w-[168px]" data-name="EmojiQuiz">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[10px] text-black text-nowrap top-[6.25px] whitespace-pre">SPOUTING WHALE</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[18px] opacity-0 top-[18.25px] w-[12px]" data-name="Text">
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[24px] left-0 not-italic text-[12px] text-black text-nowrap top-0 whitespace-pre">▶</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[58px] left-[248px] top-[83.25px] w-[221px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]" />
      <EmojiQuiz5 />
      <Text6 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[19px] top-[17px]">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white h-[158px] left-1/2 top-[calc(50%+0.25px)] translate-x-[-50%] translate-y-[-50%] w-[488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
      <Group />
      <div className="absolute inset-0 pointer-events-none shadow-[2px_2px_0px_0px_inset_#8b9594,-2px_-2px_0px_0px_inset_#d4dedd]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#b4bfbe] h-[154px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
    </div>
  );
}

function EmojiQuiz6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[417.75px] items-start left-[0.5px] top-[246.38px] w-[500px]" data-name="EmojiQuiz">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[15px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-black h-[48px] left-[6.5px] top-[674.38px] w-[118px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]" />
      <Icon />
      <p className="absolute font-['Press_Start_2P:Regular',sans-serif] leading-[21px] left-[47px] not-italic text-[14px] text-nowrap text-white top-[13px] whitespace-pre">BACK</p>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6 7H2V13H6V7Z" fill="var(--fill-0, black)" id="Vector" />
          <path d="M6 7V13L11 16V4L6 7Z" fill="var(--fill-0, black)" id="Vector_2" />
          <path d="M15 6H13V8H15V6Z" fill="var(--fill-0, black)" id="Vector_3" />
          <path d="M15 12H13V14H15V12Z" fill="var(--fill-0, black)" id="Vector_4" />
          <path d="M17 4H15V6H17V4Z" fill="var(--fill-0, black)" id="Vector_5" />
          <path d="M17 14H15V16H17V14Z" fill="var(--fill-0, black)" id="Vector_6" />
          <path d="M19 8H17V12H19V8Z" fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function SoundToggle() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[447.5px] p-[3px] size-[48px] top-[673.38px]" data-name="SoundToggle">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[2px_2px_0px_0px_#8b9594]" />
      <Icon1 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#8b9594,1px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[719.75px] relative shrink-0 w-[500px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[719.75px] relative w-[500px]">
        <Container1 />
        <Scoreboard3 />
        <Container20 />
        <EmojiQuiz6 />
        <Button4 />
        <SoundToggle />
      </div>
    </div>
  );
}

export default function Options() {
  return (
    <div className="bg-[#b4bfbe] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Options">
      <Container28 />
    </div>
  );
}