import { ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';

interface Feature {
  id: number;
  text: string;
}

interface JourneyStep {
  id: number;
  title: string;
}

interface MembershipPlan {
  id: number;
  name: string;
  price?: number;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  @ViewChild('membershipSection') membershipSection!: ElementRef;

  protected readonly title = signal('tech-book-club-landing-page');

  protected readonly features = signal<Feature[]>([
    { id: 1, text: 'Monthly curated tech reads selected by industry experts' },
    { id: 2, text: 'Virtual and in-person meetups for deep-dive discussions' },
    { id: 3, text: 'Early access to new tech book releases' },
    { id: 4, text: 'Author Q&A sessions with tech thought leaders' }
  ]);

  protected readonly journeySteps = signal<JourneyStep[]>([
    { id: 1, title: 'Choose your membership tier' },
    { id: 2, title: 'Get your monthly book selection' },
    { id: 3, title: 'Join our discussion forums' },
    { id: 4, title: 'Attend exclusive meetups' }
  ]);

  protected readonly membershipPlans = signal<MembershipPlan[]>([
    {
      id: 1,
      name: 'Starter',
      price: 19,
      features: ['1 book/month', 'Online forums'],
      buttonText: 'SUBSCRIBE NOW'
    },
    {
      id: 2,
      name: 'Pro',
      price: 29,
      features: ['2 books/month', 'Virtual meetups'],
      buttonText: 'SUBSCRIBE NOW',
      featured: true
    },
    {
      id: 3,
      name: 'Enterprise',
      features: ['Team access', 'Private sessions'],
      buttonText: 'TALK TO US'
    }
  ]);

  scrollToMembership(): void {
    this.membershipSection?.nativeElement?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
