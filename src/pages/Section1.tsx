import { FunctionComponent, useState } from "react";
import VariantNegativeSizeMNume from "../components/TagCard";

const Section1: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <section className="relative bg-whitesmoke w-full h-[835px] overflow-hidden flex flex-col items-start justify-start text-left text-[32px] text-principal font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-5 gap-[20px]">
        <div className="self-stretch relative leading-[37.5px] capitalize font-semibold">
          Lista de paginas para wending
        </div>
        <main className="self-stretch rounded-[5px] bg-blancos h-[65px] flex flex-row items-start justify-between pt-2 pb-0 pr-[1122.1400146484375px] pl-0 box-border relative text-left text-sm text-slategray font-poppins">
          <div className="my-0 mx-[!important] absolute top-[calc(50%_-_9px)] left-[calc(50%_-_616.5px)] w-[99px] z-[0]" />
          <p className="my-0 mx-[!important] absolute top-[calc(50%_-_17px)] left-[calc(50%_-_502.5px)] leading-[18px] flex items-center w-[1003px] shrink-0 z-[1]">
            Haz que tu red conozca Bodas de Hoy y EventosOrganizador. Recibirán
            una prueba ampliada de 30 días, y puedes recibir increíbles
            recompensas.
          </p>
        </main>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-right text-sm text-text-primary font-caption-s">
        <div className="self-stretch flex flex-row items-center justify-end py-0 px-5 gap-[5px]">
          <div className="flex-1 relative leading-[21px]">8 ítems</div>
          <input
            className="[outline:none] font-caption-s text-sm bg-blancos rounded shadow-[0px_1px_2px_rgba(42,_54,_71,_0.08)_inset] box-border w-[237px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1.5 px-5 text-darkgray border-[1px] border-solid border-divider-strong1"
            placeholder="Buscar"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className="cursor-pointer p-1 bg-blancos rounded shadow-[0px_1px_2px_rgba(42,_54,_71,_0.05)] box-border h-8 overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-divider-strong">
            <div className="hidden flex-row items-center justify-start">
              <img className="relative w-6 h-6" alt="" src="/24filter.svg" />
            </div>
            <div className="flex flex-row items-center justify-start py-0 px-1">
              <img className="relative w-4 h-4" alt="" src="/16smfilter.svg" />
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-1">
              <div className="relative text-sm leading-[20px] font-semibold font-caption-s text-text-primary text-center">
                Mas relevante
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/24helpoutline.svg"
              />
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <section className="self-stretch flex flex-row items-center justify-center py-0 px-5 gap-[20px] text-left text-sm text-gris font-poppins">
            <div className="w-[246.3px] h-[303px] flex flex-col items-start justify-end py-0 pr-[6.25px] pl-0 box-border">
              <img
                className="relative rounded-3xs w-60 h-[270px] object-cover"
                alt=""
                src="/b1.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-60 h-[100px] mt-[-67px]">
                <div className="absolute top-[14px] left-[20px] w-[200px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 1
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-[14.6px] h-[13.5px] [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector2.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[16px] w-52 overflow-hidden flex flex-col items-end justify-center">
                  <div className="flex flex-row items-start justify-start">
                    <VariantNegativeSizeMNume
                      pillText="Gratis"
                      variantNegativeSizeMNumeBackgroundColor="#e9fbe7"
                      variantNegativeSizeMNumeBorder="1px solid #82b886"
                      pillColor="#077838"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b2.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[247px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[207px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 2
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[26px] w-[195px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="flex flex-row items-start justify-start">
                    <VariantNegativeSizeMNume
                      pillText="19,99$"
                      variantNegativeSizeMNumeBackgroundColor="#fef2f0"
                      variantNegativeSizeMNumeBorder="1px solid #fb8b80"
                      pillColor="#c82627"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b3.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[246px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[206px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 3
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[23px] w-[200px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="flex flex-row items-start justify-start">
                    <VariantNegativeSizeMNume
                      pillText="25,99$"
                      variantNegativeSizeMNumeBackgroundColor="#fef2f0"
                      variantNegativeSizeMNumeBorder="1px solid #fb8b80"
                      pillColor="#c82627"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b4.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[246px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[206px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 4
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[23px] w-[200px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="flex flex-row items-start justify-start">
                    <VariantNegativeSizeMNume
                      pillText="30,99$"
                      variantNegativeSizeMNumeBackgroundColor="#fef2f0"
                      variantNegativeSizeMNumeBorder="1px solid #fb8b80"
                      pillColor="#c82627"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="self-stretch flex flex-row items-center justify-center py-0 px-5 gap-[20px] text-left text-sm text-gris font-poppins">
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b5.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[246px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[206px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 5
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[25px] w-[196px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="flex flex-row items-start justify-start">
                    <VariantNegativeSizeMNume
                      pillText="10,99$"
                      variantNegativeSizeMNumeBackgroundColor="#fef2f0"
                      variantNegativeSizeMNumeBorder="1px solid #fb8b80"
                      pillColor="#c82627"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b6.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[247px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[207px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 6
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[24px] w-[199px] overflow-hidden flex flex-col items-end justify-center text-center text-2xs text-text-negative font-caption-s">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-81xl bg-negative-background-light overflow-hidden flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-negative-muted">
                      <div className="relative leading-[16px] uppercase font-semibold">
                        60,99$
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b7.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[246px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[206px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 7
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[23px] w-[200px] overflow-hidden flex flex-col items-end justify-center">
                  <div className="flex flex-row items-start justify-start">
                    <VariantNegativeSizeMNume
                      pillText="40,99$"
                      variantNegativeSizeMNumeBackgroundColor="#fef2f0"
                      variantNegativeSizeMNumeBorder="1px solid #fb8b80"
                      pillColor="#c82627"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[246.3px] h-[303px] flex flex-col items-center justify-start">
              <img
                className="relative rounded-3xs w-[246.3px] h-[270px] object-cover"
                alt=""
                src="/b8.png"
              />
              <div className="relative rounded-2xl bg-blancos shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] w-[246px] h-[100px] mt-[-66px]">
                <div className="absolute top-[14px] left-[20px] w-[206px] overflow-hidden flex flex-col items-start justify-center">
                  <div className="w-[197px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative font-semibold text-negro">
                      Mi boda - Plantilla 8
                    </div>
                    <b className="relative text-3xs">Creada por: Pedro elias</b>
                    <div className="self-stretch h-[31px] flex flex-row items-center justify-between text-5xs">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start gap-[2px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/favorite--24--outline.svg"
                          />
                        </div>
                        <b className="relative">Vendidos: 15</b>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-[5px]">
                        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-principal rounded-lg overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative text-xs leading-[24px] font-poppins text-blancos text-left">
                            Demo
                          </div>
                        </button>
                        <button className="cursor-pointer p-[5px] bg-[transparent] rounded-lg box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transform:_rotate(-180deg)] border-[1px] border-solid border-principal">
                          <img
                            className="relative w-5 h-5 object-contain [transform:_rotate(180deg)]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-12px] left-[25px] w-[196px] overflow-hidden flex flex-col items-end justify-center text-center text-2xs text-text-negative font-caption-s">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-81xl bg-negative-background-light overflow-hidden flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-negative-muted">
                      <div className="relative leading-[16px] uppercase font-semibold">
                        13,99$
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Section1;
