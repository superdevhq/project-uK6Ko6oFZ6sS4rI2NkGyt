
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <div className="font-bold text-xl">SaaSify</div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-sm hover:text-primary">Features</a>
          <a href="#how-it-works" className="text-sm hover:text-primary">How It Works</a>
          <a href="#pricing" className="text-sm hover:text-primary">Pricing</a>
          <a href="#faq" className="text-sm hover:text-primary">FAQ</a>
        </div>
        <div className="flex space-x-3">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Sign up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Streamline Your Workflow with SaaSify</h1>
          <p className="text-xl text-muted-foreground mb-8">The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster than ever before.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8">Get Started Free</Button>
            <Button size="lg" variant="outline">Book a Demo</Button>
          </div>
          <div className="mt-12">
            <img 
              src="/placeholder.svg" 
              alt="Platform Dashboard" 
              className="rounded-lg shadow-xl border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Teams</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to manage projects, collaborate with your team, and deliver exceptional results.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How SaaSify Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get up and running in minutes with our simple onboarding process.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers have to say about SaaSify.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose the plan that works best for your team. All plans include a 14-day free trial.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`${plan.featured ? 'border-primary shadow-lg' : ''}`}>
                <CardContent className="pt-6">
                  {plan.featured && (
                    <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {plan.featured ? "Get Started" : "Try Free"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about SaaSify.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">Join thousands of teams that use SaaSify to streamline their processes and boost productivity.</p>
          <Button size="lg" variant="secondary" className="px-8">Start Your Free Trial</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SaaSify</h3>
              <p className="text-muted-foreground">The all-in-one platform for modern teams.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Integrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2023 SaaSify. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sample data
const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Advanced Analytics",
    description: "Gain valuable insights with comprehensive analytics and reporting tools to track performance and make data-driven decisions."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team in real-time with shared workspaces, commenting, and task assignment features."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Automation Tools",
    description: "Save time and reduce errors with powerful automation tools that streamline repetitive tasks and workflows."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected with enterprise-grade security features, including encryption and access controls."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    title: "Customizable Workflows",
    description: "Tailor the platform to your specific needs with customizable workflows, fields, and processes that adapt to your business."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    title: "Seamless Integrations",
    description: "Connect with your favorite tools and services through our extensive library of integrations and open API."
  }
];

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in seconds with just an email address and password. No credit card required to get started."
  },
  {
    title: "Customize",
    description: "Set up your workspace and customize it to match your team's needs and workflows."
  },
  {
    title: "Collaborate",
    description: "Invite your team members and start collaborating on projects right away."
  }
];

const testimonials = [
  {
    quote: "SaaSify has completely transformed how our team works together. We've seen a 40% increase in productivity since implementing it.",
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp"
  },
  {
    quote: "The automation features alone have saved us countless hours each week. I can't imagine running our business without it now.",
    name: "Michael Chen",
    role: "CEO at GrowthStartup"
  },
  {
    quote: "What impressed me most was how quickly our team adopted the platform. The intuitive design made onboarding a breeze.",
    name: "Emily Rodriguez",
    role: "Operations Director at ScaleUp"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small teams just getting started.",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "3 projects",
      "1GB storage",
      "Email support"
    ],
    featured: false
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing teams with more advanced needs.",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Unlimited projects",
      "10GB storage",
      "Priority support",
      "Custom workflows"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with complex requirements.",
    features: [
      "Unlimited team members",
      "Advanced analytics with custom reports",
      "Unlimited projects",
      "100GB storage",
      "24/7 dedicated support",
      "Custom workflows",
      "Advanced security features",
      "Dedicated account manager"
    ],
    featured: false
  }
];

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You can sign up for any plan and use all features for 14 days without being charged. No credit card is required to start your trial. At the end of the trial, you can choose to subscribe or downgrade to our free plan with limited features."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing cycle. If you downgrade, the new rate will apply to your next billing cycle."
  },
  {
    question: "Is there a limit to how many projects I can create?",
    answer: "The Starter plan allows up to 3 projects, while the Professional and Enterprise plans offer unlimited projects. You can always upgrade your plan if you need more projects."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our Enterprise plan offers additional security features like SSO and advanced access controls."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for qualified nonprofits, educational institutions, and startups. Please contact our sales team for more information."
  }
];

export default Index;
