import "./ShareReferral.css"

const ShareReferral = ({ referral }) => {
  const { link, code } = referral

  const copyToClipboard = async text => {
    try {
      await navigator.clipboard.writeText(text)
      alert("Copied Successfully!")
    } catch (error) {
      alert("Failed to copy")
    }
  }

  return (
    <section className="share-referral">

      <h2 className="section-title">
        Refer Friends & Earn More
      </h2>


      {/* Referral Link */}
      <div className="copy-group">

        <label>Your Referral Link</label>

        <div className="copy-box">

          <input
            type="text"
            value={link}
            readOnly
          />

          <button
            onClick={() => copyToClipboard(link)}
          >
            Copy
          </button>

        </div>
      </div>

      
      {/* Referral Code */}
      <div className="copy-group">

        <label>Your Referral Code</label>

        <div className="copy-box">

          <input
            type="text"
            value={code}
            readOnly
          />

          <button
            onClick={() => copyToClipboard(code)}
          >
            Copy
          </button>

        </div>

      </div>

    </section>
  )
}

export default ShareReferral