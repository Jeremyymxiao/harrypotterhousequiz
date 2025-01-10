export const metadata = {
  title: "Disclaimer | Harry Potter House Quiz",
  description: "Legal disclaimer and copyright information for Harry Potter House Quiz.",
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-harry text-amber-400 text-center mb-8">Disclaimer</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Copyright Notice</h2>
            <p className="text-amber-200">
              HARRY POTTER characters, names and related indicia are © & ™ Warner Bros. Entertainment Inc. 
              Harry Potter Publishing Rights © JKR. This website is a fan-made project and is not affiliated with, 
              endorsed, sponsored, or specifically approved by Warner Bros. Entertainment Inc. or J.K. Rowling.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Fan Content</h2>
            <p className="text-amber-200">
              This website is created by fans, for fans, as a free entertainment service. All content related to 
              the Harry Potter series is used under fair use for fan enjoyment and community engagement purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Trademark Information</h2>
            <p className="text-amber-200">
              All Harry Potter-related trademarks, characters, names, and indicia are the property of Warner Bros. 
              Entertainment Inc. and J.K. Rowling. We make no claim to ownership of any of these properties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Non-Commercial Use</h2>
            <p className="text-amber-200">
              This is a non-commercial, non-profit fan website. We do not generate any revenue from this service 
              and it is provided completely free of charge for entertainment purposes only.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 