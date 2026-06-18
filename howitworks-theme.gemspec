Gem::Specification.new do |spec|
  spec.name          = "howitworks-theme"
  spec.version       = "1.0.2"
  spec.authors       = ["qalayisleydi"]
  spec.summary       = "A minimal Jekyll theme for educational 'how it works' sites"
  spec.homepage      = "https://github.com/qalayisleydi/howitworks-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(layouts|includes|data)|assets|LICENSE|README)}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 4.0"
end
