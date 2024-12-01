function Spinner({ size }) {
  return (
    <div className="flex size-full items-center justify-center text-[#0071CE]">
      <i className={`fa-solid fa-spinner animate-spin ${size}`}></i>
    </div>
  );
}

export default Spinner;
