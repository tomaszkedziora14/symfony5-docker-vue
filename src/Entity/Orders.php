<?php

namespace App\Entity;

use App\Repository\OrdersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrdersRepository::class)
 */
class Orders
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $numberOfOrder;

    /**
     * @ORM\Column(type="text")
     */
    private $clientNumber;

    /**
     * @ORM\Column(type="float")
     */
    private $sum;

    /**
     * @ORM\Column(type="date")
     */
    private $dateOfSubmission;

    /**
     * @ORM\Column(type="date")
     */
    private $dateOfPayment;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumberOfOrder(): ?string
    {
        return $this->numberOfOrder;
    }

    public function setNumberOfOrder(string $numberOfOrder): self
    {
        $this->numberOfOrder = $numberOfOrder;

        return $this;
    }

    public function getClientNumber(): ?string
    {
        return $this->clientNumber;
    }

    public function setClientNumber(string $clientNumber): self
    {
        $this->clientNumber = $clientNumber;

        return $this;
    }

    public function getSum(): ?float
    {
        return $this->sum;
    }

    public function setSum(float $sum): self
    {
        $this->sum = $sum;

        return $this;
    }

    public function getDateOfSubmission(): ?\DateTimeInterface
    {
        return $this->dateOfSubmission;
    }

    public function setDateOfSubmission(\DateTimeInterface $dateOfSubmission): self
    {
        $this->dateOfSubmission = $dateOfSubmission;

        return $this;
    }

    public function getDateOfPayment(): ?\DateTimeInterface
    {
        return $this->dateOfPayment;
    }

    public function setDateOfPayment(\DateTimeInterface $dateOfPayment): self
    {
        $this->dateOfPayment = $dateOfPayment;

        return $this;
    }
}
