export default function AddressUI() {
  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </>
  );
}
