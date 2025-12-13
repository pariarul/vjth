"use client";

export default function JoinPanelForm() {
  return (
    <form className="grid grid-cols-2 gap-1 sm:gap-1 md:grid-cols-1">
      {/* Full width fields */}
      <div className="md:col-span-1  col-span-2">
        <input
          type="text"
          placeholder="Full Name*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div >
        <input
          type="number"
          placeholder="Age*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

<div  >

  <input
    type="date"
    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>



      <div className="md:col-span-2 col-span-2">
        <input
          type="email"
          placeholder="Email Address*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="md:col-span-2 col-span-2">
        <input
          type="tel"
          placeholder="Mobile Number*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Country*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="col-span-2">
        <input
          type="text"
          placeholder="Region / State*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="City / Town / Village*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Zip Code*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="md:col-span-2">
        <input
          type="text"
          placeholder="Language(s) Spoken*"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <select
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Gender*</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <select
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Monthly Household Income*</option>
          <option value="0-25000">0 - 25,000</option>
          <option value="25001-50000">25,001 - 50,000</option>
          <option value="50001-75000">50,001 - 75,000</option>
          <option value="75001+">75,001+</option>
        </select>
      </div>

      <div>
        <select
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Occupation*</option>
          <option value="student">Student</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>

      <div>
        <select
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Industry*</option>
          <option value="it">IT</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="finance">Finance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="md:col-span-2 col-span-2">
        <input
          type="text"
          placeholder="Job Title"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full px-5 py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
